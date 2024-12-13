package com.example.voting_App.service;

import com.example.voting_App.entity.CandidateElection;
import com.example.voting_App.repository.CandidateElectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateElectionService {
    @Autowired
    private CandidateElectionRepository candidateElectionRepository;

    public List<CandidateElection> getAllCandidateElections() {
        return candidateElectionRepository.findAll();
    }

    public Optional<CandidateElection> getCandidateElectionById(Long id) {
        return candidateElectionRepository.findById(id);
    }

    public CandidateElection createCandidateElection(CandidateElection candidateElection) {
        return candidateElectionRepository.save(candidateElection);
    }

    public CandidateElection updateCandidateElection(Long id, CandidateElection candidateElectionDetails) {
        CandidateElection candidateElection = candidateElectionRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("CandidateElection not found"));

        candidateElection.setCandidate(candidateElectionDetails.getCandidate());
        candidateElection.setElection(candidateElectionDetails.getElection());
        return candidateElectionRepository.save(candidateElection);
    }

    public void deleteCandidateElection(Long id) {
        CandidateElection candidateElection = candidateElectionRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("CandidateElection not found"));
        candidateElectionRepository.delete(candidateElection);
    }
}
