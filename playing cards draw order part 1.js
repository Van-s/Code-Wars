// input arr
// output arr
//deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"] -> drawn = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"]
// create arr to hold cards
// push first card(draw)
// delete pushed element
// push next card to end of deck
// delete copy
// repeat til no more left

const draw = (deck) => {
  let cards = deck
	const drawnCards = [];
  while(cards.length > 0){
    drawnCards.push(cards[0])
    cards.shift()
    cards.push(cards[0])
    cards.shift()
  }

	return drawnCards;
};