function init(){
    initHourAndMinute();
    initChoice();
    addEmail();
    addInterval();
    addFixedDate();
}

function initChoice()
{
    $('#now').show();
    $('#intervals-of-date').hide();
    $('#fixed-dates').hide();
}

var nbrInterval = 1;
var nbrFixedDate = 1;
var nbrEmail = 1;


function addInterval(){
    var $intervalsContainer = $('#intervals-of-date .card-body#intervals-container');
    var $interval = $('#hided-content .interval').clone();
    $interval.find('span').text($interval.find('span').text()+nbrInterval);
    $intervalsContainer.append($interval);
    nbrInterval++;
    $('.date').datepicker();
}

function removeInterval()
{
    var $intervals = $('#intervals-of-date .card-body#intervals-container .interval');
    $intervals.each((index , element)=> {
        if($(element).find('.card-header #intervalcheck').is(':checked'))
        {
            $(element).remove();
        }
    });
}


function addFixedDate(){
    var $fixedDateContainer = $('#fixed-dates .card-body#fixed-date-container');
    var $fixedDate = $('#hided-content .fixed-date').clone();
    $fixedDate.find('span').text($fixedDate.find('span').text()+nbrFixedDate);
    $fixedDateContainer.append($fixedDate);
    nbrFixedDate++;
    $('.date').datepicker();
}

function removeFixedDate()
{
    var $fixedDates = $('#fixed-dates .card-body#fixed-date-container .fixed-date');
    $fixedDates.each((index , element)=> {
        if($(element).find('.card-header #datecheck').is(':checked'))
        {
            $(element).remove();
        }
    });
}

function addEmail(){
    var $emailContainer = $('#emails .card-body#email-container');
    var $email = $('#hided-content .email').clone();
    $email.find('span').text($email.find('span').text()+nbrEmail);
    $emailContainer.append($email);
    nbrEmail++;
}

function removeEmail()
{
    var $emails = $('#emails .card-body#email-container .email');
    $emails.each((index , element)=> {
        if($(element).find('.card-header #emailcheck').is(':checked'))
        {
            $(element).remove();
        }
    });
}

function initHourAndMinute()
{
    for(var i = 1 ; i< 24 ; i++ ) 
    {
        $('.hour').append('<option value="'+i+'">'+i+'</option>');
    }
    for(var i = 1 ; i< 60 ; i++ ) 
    {
        $('.minute').append('<option value="'+i+'">'+i+'</option>');
    }
}

$(document).ready(function(){
    $('.date').datepicker();

    init();

    $('#intervals-of-date-choice').on('click', function(){
        $('#intervals-of-date').show();
        $('#fixed-dates').hide();
        $('#now').hide();
    });

    $('#fixed-date-choice').on('click', function(){
        $('#fixed-dates').show();
        $('#intervals-of-date').hide();
        $('#now').hide();
    });

    $("#now-choice").on('click' , function(){
        $('#now').show();
        $('#intervals-of-date').hide();
        $('#fixed-dates').hide();
    });

    $('#add-interval').on('click' , function () {
        addInterval();
    });

    $('#remove-interval').on('click' , function(){
        removeInterval();
    });

    $('#add-fixed-date').on('click' , function() {
        addFixedDate();
    });

    $('#remove-fixed-date').on('click' , function(){
        removeFixedDate();
    });

    $('#add-email').on('click' , function() {
        addEmail();
    });

    $('#remove-email').on('click' , function(){
        removeEmail();
    });
});