import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Wire to Supabase — parallel fetch dashboard payload
  return NextResponse.json({
    examId: "EXAM133",
    slug: "usmle-step-1",
    examName: "USMLE Step 1",
    stats: { totalQuestions: 0, completedQuestions: 0, averageScore: 0 },
    recentAttempts: [],
  });
}
