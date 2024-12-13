package com.example.voting_App.repository;

import com.example.voting_App.entity.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoterRepository extends JpaRepository<Voter, Long> {

	List<Voter> findAll();
    // Custom query methods can be added here
}
