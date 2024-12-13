package com.example.voting_App.service;

import com.example.voting_App.entity.*;
import com.example.voting_App.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoterService {
    @Autowired
    private VoterRepository voterRepository;

    public List<Voter> getAllVoters() {
        return voterRepository.findAll();
    }

    public Optional<Voter> getVoterById(Long id) {
        return voterRepository.findById(id);
    }

    public Voter createVoter(Voter voter) {
        return voterRepository.save(voter);
    }

    public Voter updateVoter(Long id, Voter voterDetails) {
        Voter voter = voterRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Voter not found"));

        voter.setName(voterDetails.getName());
        voter.setDob(voterDetails.getDob());
        voter.setGender(voterDetails.getGender());
        voter.setAddress(voterDetails.getAddress());

        return voterRepository.save(voter);
    }

    public void deleteVoter(Long id) {
        Voter voter = voterRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Voter not found"));
        voterRepository.delete(voter);
    }
}
