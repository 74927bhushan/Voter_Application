package com.example.voting_App.service;

import com.example.voting_App.entity.VoterElectionCandidate;
import com.example.voting_App.repository.VoterElectionCandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoterElectionCandidateService {
    @Autowired
    private VoterElectionCandidateRepository voterElectionCandidateRepository;

    public List<VoterElectionCandidate> getAllVoterElectionCandidates() {
        return voterElectionCandidateRepository.findAll();
    }

    public Optional<VoterElectionCandidate> getVoterElectionCandidateById(Long id) {
        return voterElectionCandidateRepository.findById(id);
    }

    public VoterElectionCandidate createVoterElectionCandidate(VoterElectionCandidate voterElectionCandidate) {
        return voterElectionCandidateRepository.save(voterElectionCandidate);
    }

    public VoterElectionCandidate updateVoterElectionCandidate(Long id, VoterElectionCandidate voterElectionCandidateDetails) {
        VoterElectionCandidate voterElectionCandidate = voterElectionCandidateRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("VoterElectionCandidate not found"));

        voterElectionCandidate.setElection(voterElectionCandidateDetails.getElection());
        voterElectionCandidate.setVoter(voterElectionCandidateDetails.getVoter());
        voterElectionCandidate.setCandidateElection(voterElectionCandidateDetails.getCandidateElection());

        return voterElectionCandidateRepository.save(voterElectionCandidate);
    }

    public void deleteVoterElectionCandidate(Long id) {
        VoterElectionCandidate voterElectionCandidate = voterElectionCandidateRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("VoterElectionCandidate not found"));
        voterElectionCandidateRepository.delete(voterElectionCandidate);
    }
}
