function run(argv) {
    // First argument is bundleId, remaining arguments are uuids
    let bundleId = argv[0] || "com.devon-technologies.think3";
    let dtp = Application(bundleId);
    let records = []
    // UUIDs start from the second argument
    for (let i = 1; i < argv.length; i++) {
        let uuid = argv[i];
        let r = dtp.getRecordWithUuid(uuid)
        records.push({
            name: r.name(),
            filename: r.filename(),
            path: r.path(),
            location: r.location(),
            // referenceURL: r.referenceURL(),
            // score: r.score(),
            // thumbnail: r.thumbnail(),
            uuid: r.uuid(),
            type: r.type(),
            kind: r.kind() 
        })
    }
    // return  uuid
    return JSON.stringify(records)
}