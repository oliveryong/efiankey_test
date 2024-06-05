<?php

function daysBetweenDates($date1, $date2) {
    // Create DateTime objects that takes two dates, this DateTime is a php method to handle date and time easily 
    $datetime1 = new DateTime($date1);
    $datetime2 = new DateTime($date2);
    
    // Finds the differences between the dates
    $interval = $datetime1->diff($datetime2);
    
    // Gets number of days in integer form
    $days = $interval->days;
    
    // Determine if the number of days is odd or even, by moduling number by 2 
    $dayType = ($days % 2 == 0) ? 'even' : 'odd';
    
    return [
        'days' => $days,
        'dayType' => $dayType
    ];
}

// Date examples used
$date1 = '2023-06-01';
$date2 = '2023-06-10';

$result = daysBetweenDates($date1, $date2);
//print date result 
echo "Days between $date1 - $date2: " . $result['days'] . "\n";
echo "The number of days: " . $result['dayType'] . "\n";
?>

