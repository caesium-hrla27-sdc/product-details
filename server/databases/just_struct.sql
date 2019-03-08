-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."just_struct" (
    "id" int4 NOT NULL,
    "name" text,
    "breadcrumbs" text,
    "description" text,
    "size" text,
    "item_number" int2,
    "price" int4,
    "“details""" text,
    "how_to_use" text,
    "ingredients" text,
    "about_the_brand" text,
    "shipping_returns" text,
    "exclusive" bool,
    "average_rating" int2,
    "review_count" int2,
    "loves_count" int2,
    "media" text,
    PRIMARY KEY ("id")
);

