package com.example.voting_App.entity;

import jakarta.persistence.*;

@Entity
public class Election {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private ElectionType electionType;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ElectionType getElectionType() {
		return electionType;
	}

	public void setElectionType(ElectionType electionType) {
		this.electionType = electionType;
	}

    // Getters and Setters
    
}
