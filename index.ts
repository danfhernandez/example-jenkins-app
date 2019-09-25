import * as aws from "@pulumi/aws";

const s3Bucket = new aws.s3.Bucket("bucket");
