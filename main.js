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

shuffle(adults);
shuffle(children);

function getOptionList(group, person) {
  const familyId = person.id;
  const optionList = [];

  for (let member of group) {
    if (member.familyId !== familyId && !member.hasBeenSelected) {
      optionList.push(member);
    }
  }

  return optionList;
}

function shuffle(list) {
  let currIndex = list.length,
    tempVal,
    ranIndex;
  while (currIndex !== 0) {
    ranIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;

    tempVal = list[currIndex];
    list[currIndex] = list[ranIndex];
    list[ranIndex] = tempVal;
  }

  return list;
}
