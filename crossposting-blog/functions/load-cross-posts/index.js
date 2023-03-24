const { PutItemCommand, DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');

const ddb = new DynamoDBClient();

exports.handler = async (event) => {
  try {
    const data = getData();
    await Promise.allSettled(data.map(async (item) => {
      await addToDb(item);
    }));
  } catch (err) {
    console.error(err);
  }
};

const addToDb = async (item) => {
  await ddb.send(new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: marshall({
      pk: item.url,
      sk: 'article',
      GSI1PK: 'article',
      GSI1SK: item.title,
      title: item.title,
      links: {
        url: item.url,
        ...item.devUrl && { devUrl: item.devUrl },
        ...item.mediumUrl && { mediumUrl: item.mediumUrl },
        ...item.hashnodeUrl && { hashnodeUrl: item.hashnodeUrl }
      }
    })
  }));
};

const getData = () => {
  return [
    {
      "title": "How can I become an Open Source contributor? (The ultimate guide)",
      "devUrl": "https://dev.to/juliafmorgado/how-can-i-become-an-open-source-contributor-the-ultimate-guide-272e",
      "url": "/posts/guide-to-become-open-source-contributor/",
      "mediumUrl": "https://medium.com/@juliafmorgado/how-can-i-become-an-open-source-contributor-the-ultimate-guide-d746e380e011",
      "hashnodeUrl": "https://julia.hashnode.dev/how-can-i-become-an-open-source-contributor-the-ultimate-guide"
    },
    {
      "title": "From KubeCon to my first keynote as a DevRel",
      "devUrl": "https://dev.to/juliafmorgado/from-kubecon-to-my-first-keynote-as-a-devrel-c87",
      "url": "/posts/from-kubecon-to-my-first-keynote-as-a-devrel/",
      "mediumUrl": "https://medium.com/@juliafmorgado/from-kubecon-to-my-first-keynote-as-a-devrel-203b1c9bfb4b",
      "hashnodeUrl": "https://julia.hashnode.dev/from-kubecon-to-my-first-keynote-as-a-devrel"
    }
  ]
};