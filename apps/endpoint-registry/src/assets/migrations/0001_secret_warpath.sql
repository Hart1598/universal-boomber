ALTER TABLE "api_endpoints" ADD COLUMN "type" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "api_endpoints" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;