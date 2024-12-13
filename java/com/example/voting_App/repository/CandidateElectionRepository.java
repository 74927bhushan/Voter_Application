package com.example.voting_App.repository;

import com.example.voting_App.entity.CandidateElection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateElectionRepository extends JpaRepository<CandidateElection, Long> {
}
