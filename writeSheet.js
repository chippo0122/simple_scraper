
const path = require('path')
const XLSX = require('xlsx')
const {output_filename} = require('./setup.json')

const writeSheet = (data) => {
    const insert = data.map(el => {
        return Object.values(el);
    })
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.aoa_to_sheet(insert);
    XLSX.utils.book_append_sheet(workBook, workSheet);
    XLSX.writeFile(workBook, path.resolve(`${output_filename}.xlsx`))
}

module.exports = {
    writeSheet
}

