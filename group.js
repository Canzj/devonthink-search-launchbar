function run(argv) {
    let jsonArg = JSON.parse(argv[0]);
    let bundleId = jsonArg.bundleId || "com.devon-technologies.think3";
    let dtp = Application(bundleId);

    let groupUuid = jsonArg.uuid.toString()
    let group = dtp.getRecordWithUuid(groupUuid)

    let records = group.children()

    results = records.map((r) => {
        return {
            name: r.name(),
            filename: r.filename(),
            path: r.path(),
            location: r.location(),
            // referenceURL: r.referenceURL(),
            score: r.score(),
            // thumbnail: r.thumbnail(),
            uuid: r.uuid(),
            type: r.type(),
            kind: r.kind()
        }
    })

    return JSON.stringify(results);
}
