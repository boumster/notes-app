



const config = {
    MAX_ATTACHEMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: "us-east-1",
      BUCKET: "boum-notes-storagestack-uploadsbucketc4b27cc7-1b2667azx8137",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://uhsv9lvrj1.execute-api.us-east-1.amazonaws.com",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_dbnOlG3r4",
      APP_CLIENT_ID: "7bv7cgm51pgr084slgfdo42o7u",
      IDENTITY_POOL_ID: "us-east-1:7d6cfdd3-834d-4275-a8e9-3e9c5015f369",
    },
  };
  
  export default config;