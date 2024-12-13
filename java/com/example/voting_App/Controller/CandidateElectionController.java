package com.example.voting_App.Controller;

import com.example.voting_App.entity.CandidateElection;
import com.example.voting_App.service.CandidateElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidate-elections")
public class CandidateElectionController {
    @Autowired
    private CandidateElectionService candidateElectionService;

    @GetMapping
    public List<CandidateElection> getAllCandidateElections() {
        return candidateElectionService.getAllCandidateElections();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidateElection> getCandidateElectionById(@PathVariable Long id) {
        return candidateElectionService.getCandidateElectionById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CandidateElection createCandidateElection(@RequestBody CandidateElection candidateElection) {
        return candidateElectionService.createCandidateElection(candidateElection);
    }

    @PutMapping("/{id}")
    public CandidateElection updateCandidateElection(@PathVariable Long id, @RequestBody CandidateElection candidateElectionDetails) {
        return candidateElectionService.updateCandidateElection(id, candidateElectionDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCandidateElection(@PathVariable Long id) {
        candidateElectionService.deleteCandidateElection(id);
        return ResponseEntity.ok().build();
    }
}
