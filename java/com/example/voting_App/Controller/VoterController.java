package com.example.voting_App.Controller;

import com.example.voting_App.entity.*;
import com.example.voting_App.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voters")
public class VoterController {
    @Autowired
    private VoterService voterService;

    @GetMapping("/voters")
    public List<Voter> getAllVoters() {
        return voterService.getAllVoters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Voter> getVoterById(@PathVariable Long id) {
        return voterService.getVoterById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Voter createVoter(@RequestBody Voter voter) {
        return voterService.createVoter(voter);
    }

    @PutMapping("/{id}")
    public Voter updateVoter(@PathVariable Long id, @RequestBody Voter voterDetails) {
        return voterService.updateVoter(id, voterDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVoter(@PathVariable Long id) {
        voterService.deleteVoter(id);
        return ResponseEntity.ok().build();
    }
}
