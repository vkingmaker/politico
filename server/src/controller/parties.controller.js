import parties from '../mock/parties.db';

const partyRecords = parties();

export default class PartiesControllers {

  static createParties(req, res) {
    const { logoUrl, hqAddress, name} = req.body;
    partyRecords.push(
      {
        id: +(partyRecords.length + 1),
        name,
        hqAddress,
        logoUrl,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
    );
    res.status(201).send({
      status: res.statusCode,
      data: [{
        id: +(partyRecords.length),
        name,
      }],
    });
  }
}
