// Auto-generated content manifest for USMLE Step 1
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  minQuestionCount: number;
  requiredActivityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "usmle-step-1",
  examName: "USMLE Step 1",
  totalQuestions: 3000,
  category: "professional",
  topics: [
    {
  id: "foundational-sciences",
  domain: "foundational-sciences",
  title: "Foundational Sciences",
  icon: "🧪",
  color: "#1E40AF",
  minQuestionCount: 650,
  requiredActivityTypes: ["multiple_choice", "reading_passage"],
},
{
  id: "pathology-pharmacology",
  domain: "pathology-pharmacology",
  title: "Pathology & Pharmacology",
  icon: "💊",
  color: "#DC2626",
  minQuestionCount: 700,
  requiredActivityTypes: ["multiple_choice", "case_study"],
},
{
  id: "microbiology-immunology",
  domain: "microbiology-immunology",
  title: "Microbiology & Immunology",
  icon: "🦠",
  color: "#059669",
  minQuestionCount: 550,
  requiredActivityTypes: ["multiple_choice", "diagram_label"],
},
{
  id: "organ-systems",
  domain: "organ-systems",
  title: "Organ Systems",
  icon: "🫀",
  color: "#7C3AED",
  minQuestionCount: 700,
  requiredActivityTypes: ["multiple_choice", "case_study"],
},
{
  id: "behavioral-science",
  domain: "behavioral-science",
  title: "Behavioral Science",
  icon: "🧠",
  color: "#D97706",
  minQuestionCount: 400,
  requiredActivityTypes: ["multiple_choice", "reading_passage"],
}
  ],
};
