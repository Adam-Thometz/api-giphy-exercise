const $gifArea = $('#gifArea')

// form submission

$('form').on('submit', async function(e) {
  e.preventDefault();

  let searchTerm = $('#search').val();
  $('#search').val('');

  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  })
  addGIF(res.data)
})

// appending gifs

function addGIF(res) {
  if(res.data.length) {
    let randIdx = Math.floor(Math.random() * res.data.length);
    let $newCon = $('<div>', {class: 'gif-container'})
    let $newGIF = $('<img>', {src: res.data[randIdx].images.original.url})
    $newCon.append($newGIF)
    $gifArea.append($newCon)
  }
}

// removing all GIFs

$('#remove').on('click', function() {
  $gifArea.empty()
})