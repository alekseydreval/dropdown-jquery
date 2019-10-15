
$( () => {
    
  const new_list = $("<ul class=\"custom-select\">");
  const input = $("<input class=\"custom-select-input\">");
  const result = $("<div class=\"custom-select-result\">");

  $(".custom-select").each((_, select) => {
      $(select).children().each((_, option) => {
          let attrs = {};
          $.each($(option).data(), (k, v) => {
            attrs["data-" + k] = v;
          });
          console.log(attrs);
          $(new_list).append($("<li class=\"custom-select-input-option\">")
                              .html($(option).data("content"))
                              .attr(attrs));
      });
  
    $(".custom-select").remove();
    $(".custom-select-container").append(input);
    $(".custom-select-container").append(result);
    $(".custom-select-container").append(new_list);

  });

  new_list.hide();
  
  $('body').on('mouseenter', '.custom-select-input-option', (event) => {
    $(event.target).css({'background-color': 'rgb(204, 204, 255)'})
  });

  $('body').on('mouseleave', '.custom-select-input-option', (event) => {
    $(event.target).css({'background-color': 'rgb(255, 255, 255)'})
  });

  $('body').on('click', '.custom-select-input, .custom-select-result', () => {
      new_list.show();
      new_list.children().show();
  });


  $('body').on('click', '.custom-select-input-option', (event) => {
    const target = $(event.target).hasClass('custom-select-input-option') ? event.target : $(event.target).parent('.custom-select-input-option')
    
    new_list.hide();
    input.val($(target).text());

  });

  $('body').on('keyup', '.custom-select-input', (event) => {
    const value = $(event.target).val()
    new_list.children().show();
    new_list.children().filter((_, option) => { return !$(option).text().includes(value) && !Object.values($(option).data()).some((val) => { return val.includes(value) } ) })
                       .hide();
  });
});
