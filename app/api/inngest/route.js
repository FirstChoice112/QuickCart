import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpate,
  syncUserDeletion,
} from "@/config/innegst";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpate, syncUserDeletion],
});
