import * as aws from "@pulumi/aws";

const photos = new aws.s3.Bucket("photos");

const videos = new aws.s3.Bucket("videos")

const videos2 = new aws.s3.Bucket("videos2")