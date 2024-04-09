CREATE TABLE IF NOT EXISTS "api_endpoints" (
	"endpointId" serial PRIMARY KEY NOT NULL,
	"url" varchar NOT NULL,
	"method" varchar NOT NULL,
	CONSTRAINT "api_endpoints_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "headers" (
	"headerId" serial PRIMARY KEY NOT NULL,
	"endpointId" integer NOT NULL,
	"key" varchar NOT NULL,
	"value" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payload_templates" (
	"templateId" serial PRIMARY KEY NOT NULL,
	"endpointId" integer NOT NULL,
	"template" text NOT NULL,
	"target" varchar NOT NULL,
	"valueTarget" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "headers" ADD CONSTRAINT "headers_endpointId_api_endpoints_endpointId_fk" FOREIGN KEY ("endpointId") REFERENCES "api_endpoints"("endpointId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payload_templates" ADD CONSTRAINT "payload_templates_endpointId_api_endpoints_endpointId_fk" FOREIGN KEY ("endpointId") REFERENCES "api_endpoints"("endpointId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
