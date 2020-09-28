/**
 * Searches for dates in an array of strings. The dates can be in form
 * dd.mm.yyyy, dd.mm.yy or yyyy-mm-dd
 *
 * @param {string[]} fragments array of string fragments to be scanned for dates
 * @returns the date in the input array as js Date object or null, if no strings contain a date. If multiple dates are found, returns the date closest to today.
 */
function findDate(fragments) {
  let ret = null;
  let matches = [];
  for (let i = 0; i < fragments.length; i += 1) {
    const m1 = fragments[i].match(
      /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/g
    );
    const m2 = fragments[i].match(/[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9]/g);
    const m3 = fragments[i].match(
      /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/g
    );
    if (m1 && m1.length > 0) {
      matches = matches.concat(m1);
    }
    if (m2 && m2.length > 0) {
      matches = matches.concat(m2);
    }
    if (m3 && m3.length > 0) {
      matches = matches.concat(m3);
    }
  }

  if (matches.length > 0) {
    const dates = [];
    for (let i = 0; i < matches.length; i += 1) {
      if (matches[i]) {
        matches[i] = matches[i].trim();
        let parts = matches[i].split(".");
        if (parts.length <= 1) {
          const parts2 = matches[i].split("-");
          parts = [parts2[2], parts2[1], parts2[0]];
        }
        const d = new Date();
        let y = parts[2];
        if (parts[2].length === 2) {
          y = `20${y}`;
        }
        //d.setFullYear(y);
        //d.setMonth(parseInt(parts[1], 10));
        d.setFullYear(parseInt(y, 10));
        d.setMonth(parseInt(parts[1], 10) - 1);
        d.setDate(parseInt(parts[0], 10));
        d.setUTCHours(0, 0, 0, 0);
        dates.push(d);
      }
    }

    let ind = 0;
    let datediff = 1000 * 60 * 60 * 24 * 30 * 12 * 10;
    for (let i = 0; i < dates.length; i += 1) {
      if (!isNaN(dates[i].getTime())) {
        const td = Date.now() - dates[i].getTime();
        if (td < datediff) {
          datediff = td;
          ind = i;
        }
      }
    }
    ret = dates[ind];
  }
  return ret;
}

module.exports = findDate;
