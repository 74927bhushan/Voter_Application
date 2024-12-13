package com.example.voting_App.Controller;

import com.example.voting_App.entity.Election;
import com.example.voting_App.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/elections")
public class ElectionController {
    @Autowired
    private ElectionService electionService;

    @GetMapping
    public List<Election> getAllElections() {
        return electionService.getAllElections();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Election> getElectionById(@PathVariable Long id) {
        return electionService.getElectionById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Election createElection(@RequestBody Election election) {
        return electionService.createElection(election);
    }

    @PutMapping("/{id}")
    public Election updateElection(@PathVariable Long id, @RequestBody Election electionDetails) {
        return electionService.updateElection(id, electionDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteElection(@PathVariable Long id) {
        electionService.deleteElection(id);
        return ResponseEntity.ok().build();
    }
}
