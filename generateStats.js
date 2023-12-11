/**
 * Gets all dictionaries from indexedDB
 * @returns {Promise<Array<Dict>>}
 */
async function getAllDicts() {
  return new Promise(async (resolve, reject) => {
    let request = await window.indexedDB.open('dict');

    /**
     * @param {IDBRequest} event
     */
    request.onsuccess = function (event) {
      /**
       * @type {IDBDatabase}
       */
      let db = event.target.result;
      let transaction = db.transaction(['dictionaries'], 'readonly');
      let store = transaction.objectStore('dictionaries');

      const dicts = [];

      // open a cursor to iterate over all entries
      let request = store.openCursor();
      request.onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
          let entry = cursor.value;
          dicts.push(entry);
          cursor.continue();
        } else {
          console.log('No more entries');
          resolve(dicts);
        }
      };
    };
  });
}

const entryTypes = ['terms', 'termMeta', 'kanji', 'kanjiMeta'];
(async () => {
  const dicts = await getAllDicts();
  const output = [];
  for (let dict of dicts) {
    const { title, revision, author, url, description, attribution } = dict;

    let entryCount = 0;
    for (const entryType of entryTypes) {
      entryCount += dict.counts[entryType]?.total ?? 0;
    }

    output.push({
      title,
      revision,
      author,
      url,
      description,
      attribution,
      entryCount,
    });
  }
  // export to md table
  let md = '| Title | Revision | Author | URL | Description | Attribution | Entry Count |\n';
  md += '| ----- | -------- | ------ | --- | ----------- | ----------- | ----------- |\n';
  for (const row of output) {
    let line = `| ${row.title ?? ''} | ${row.revision ?? ''} | ${row.author ?? ''} | ${
      row.url ?? ''
    } | ${row.description ?? ''} | ${row.attribution ?? ''} | ${row.entryCount ?? ''} |`;
    line = line.replace(/\n/g, '<br />');
    md += line + '\n';
  }
  console.log(md);
})();
