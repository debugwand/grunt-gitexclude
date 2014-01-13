var GitExclude = (function () {
    var fs = require('fs');
    var excludeSubdir = '/.git/info/exclude';
    var success = false;
    var exclude = function (id, destDir, srcFiles) {
        var excludeFile = destDir + excludeSubdir,
            commentStart = '# ' + id.toUpperCase() + ' exclusions',
            commentEnd = '# END ' + id.toUpperCase() + ' exclusions',
            contents = '', 
            newContents,
            filesItems,
            hasExclusions,
            endExclusions;

        if (fs.existsSync(excludeFile)) {
            contents = fs.readFileSync(excludeFile, {"encoding": "utf8"});
            filesList = srcFiles.join('\n');
            hasExclusions = contents.search(commentStart);
            if (hasExclusions > -1) {
                endExclusions = contents.search(commentEnd);
                newContents = [contents.substring(0, hasExclusions + commentStart.length), filesList, contents.substring(endExclusions)].join('\n');
            }
            else {
                newContents = [contents, commentStart, filesList, commentEnd].join('\n');
            }
            fs.writeFileSync(excludeFile, newContents + '\n');
            //console.log("Exclude file '" + excludeFile + "' updated");
            return {"success": true, "msg": "Exclude file '" + excludeFile + "' updated"};
        }
        else {
            return {"success": false, "msg": "Could not find the exclude file at '" + excludeFile + "'"};
            throw new Error("Could not find the exclude file at '" + excludeFile + "'");
        }
    };
    return {
        exclude: exclude
    }
}());

module.exports = GitExclude;
