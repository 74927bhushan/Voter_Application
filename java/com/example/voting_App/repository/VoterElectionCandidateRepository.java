package com.example.voting_App.repository;

import com.example.voting_App.entity.VoterElectionCandidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoterElectionCandidateRepository extends JpaRepository<VoterElectionCandidate, Long> {
}
