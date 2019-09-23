import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

//adding comment to kick off jenkins -updating for develop branch
const s3Bucket = new aws.s3.Bucket("test-bucket");