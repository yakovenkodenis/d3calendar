import d3 from 'd3';
import { Calendar } from 'calendar';
import consts from './consts';

let cal = new Calendar();

const month = 8;
const year = 2015;


const weeks = cal.monthDays(year, month);
const table = d3.select('#calendar');
let header = table.append('thead');
let body = table.append('tbody');

header
    .append('tr')
    .selectAll('td')
    .data(consts.dayNames)
    .enter()
    .append('td')
    .style('text-align', 'center')
    .text( d => {
        return d;
    });

weeks.map( week => {
    body
        .append('tr')
        .selectAll('td')
        .data(week)
        .enter()
        .append('td')
        .attr('class', d => {
            return d > 0 ? '' : 'empty';
        })
        .text( d => {
            return d > 0 ? d : '';
        })
});