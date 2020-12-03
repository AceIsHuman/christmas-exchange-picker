const { families } = require('./data');

const adults = [];
const children = [];

for (let family of families) {
  for (let member of family.parents) {
    adults.push(member);
  }
  for (let member of family.children) {
    member.adult ? adults.push(member) : children.push(member);
  }
}
