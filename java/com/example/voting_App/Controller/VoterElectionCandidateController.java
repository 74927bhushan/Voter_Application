package com.example.voting_App.Controller;

import com.example.voting_App.entity.VoterElectionCandidate;
import com.example.voting_App.service.VoterElectionCandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voter-election-candidates")
public class VoterElectionCandidateController {
    @Autowired
    private VoterElectionCandidateService voterElectionCandidateService;

    @GetMapping
    public List<VoterElectionCandidate> getAllVoterElectionCandidates() {
        return voterElectionCandidateService.getAllVoterElectionCandidates();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VoterElectionCandidate> getVoterElectionCandidateById(@PathVariable Long id) {
        return voterElectionCandidateService.getVoterElectionCandidateById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public VoterElectionCandidate createVoterElectionCandidate(@RequestBody VoterElectionCandidate voterElectionCandidate) {
        return voterElectionCandidateService.createVoterElectionCandidate(voterElectionCandidate);
    }

    @PutMapping("/{id}")
    public VoterElectionCandidate updateVoterElectionCandidate(@PathVariable Long id, @RequestBody VoterElectionCandidate voterElectionCandidateDetails) {
        return voterElectionCandidateService.updateVoterElectionCandidate(id, voterElectionCandidateDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVoterElectionCandidate(@PathVariable Long id) {
        voterElectionCandidateService.deleteVoterElectionCandidate(id);
        return ResponseEntity.ok().build();
    }
}
