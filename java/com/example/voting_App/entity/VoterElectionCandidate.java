package com.example.voting_App.entity;

import jakarta.persistence.*;

@Entity
public class VoterElectionCandidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "election_id")
    private Election election;

    @ManyToOne
    @JoinColumn(name = "voter_id")
    private Voter voter;

    @ManyToOne
    @JoinColumn(name = "candidate_election_id")
    private CandidateElection candidateElection;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Election getElection() {
		return election;
	}

	public void setElection(Election election) {
		this.election = election;
	}

	public Voter getVoter() {
		return voter;
	}

	public void setVoter(Voter voter) {
		this.voter = voter;
	}

	public CandidateElection getCandidateElection() {
		return candidateElection;
	}

	public void setCandidateElection(CandidateElection candidateElection) {
		this.candidateElection = candidateElection;
	}

    // Getters and Setters
    
}
