# SuperAgent: B.L.A.S.T. Framework Template

## 🚀 Overview
This is a **Master Framework Template** designed to initialize future Agentic projects with a deterministic, self-healing architecture. It follows the **B.L.A.S.T.** (Blueprint, Link, Architect, Stylize, Trigger) protocol and validates connectivity before executing logic.

## 📂 Structure
*   `gemini.md` (Constitution): The single source of truth for schemas and rules.
*   `task_plan.md` (Memory): Tracks phases and progress.
*   `progress.md` (Work Log): Tracks historical progress logs.
*   `findings.md` (Research): Tracks discoveries, architecture constraints, and knowledge.
*   `architecture/` (SOPs): Markdown files defining logic and procedures.
*   `tools/` (Engines): Atomic Python scripts for execution.
*   `.tmp/` (Workbench): For ephemeral data processing.
*   `.agent/skills/` (Skills): Pre-defined agentic skills ready to be utilized.

## 🛠️ Usage Guide

### 1. Initialize a New Project
Duplicate this folder and rename it for your new project. Do not modify the master template folder except when updating its core structure. Follow **SOP 001** in `architecture/SOP_001_NewProjectSetup.md` for project initialization steps.

### 2. Configure Environment
Copy `.env.example` to `.env` and fill in your API keys for the new project.
```bash
cp .env.example .env
```

### 3. Verify Setup (Handshake)
Run the handshake script to ensure the environment is correctly linked.
```bash
python3 tools/check_environment.py
```

### 4. NotebookLM Intelligence (New!)
The template is now pre-wired with the **NotebookLM MCP**. This allows the agent to perform deep research and content repurposing across your notebooks. 

If the session ever expires, run the following to re-authenticate:
```bash
notebooklm-mcp-auth
```

### 5. Create New Skills
Use the **Antigravity Skill Creator** instructions in `.agent/skills/antigravity-skill-creator/SKILL.md` or other pre-loaded skills via the `skills` directory to empower your new agent with domain-specific capabilities.
