package com.example.voting_App.service;

import com.example.voting_App.entity.Election;
import com.example.voting_App.repository.ElectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ElectionService {
    @Autowired
    private ElectionRepository electionRepository;

    public List<Election> getAllElections() {
        return electionRepository.findAll();
    }

    public Optional<Election> getElectionById(Long id) {
        return electionRepository.findById(id);
    }

    public Election createElection(Election election) {
        return electionRepository.save(election);
    }

    public Election updateElection(Long id, Election electionDetails) {
        Election election = electionRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Election not found"));

        election.setElectionType(electionDetails.getElectionType());
        return electionRepository.save(election);
    }

    public void deleteElection(Long id) {
        Election election = electionRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Election not found"));
        electionRepository.delete(election);
    }
}
