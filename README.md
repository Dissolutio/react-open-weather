# Weather API info

## Parameters

### coord

-   coord.lon : City geo location, longitude
-   coord.lat : City geo location, latitude

### id City ID

### name City name

### weather (Array of weather condition objects)

Each object has four properties:

-   weather.id Weather condition id
-   weather.main Group of weather parameters (Rain, Snow, - Extreme etc.)
-   weather.description Weather condition within the group
-   weather.icon Weather icon id

### base : Internal parameter

### main

-   main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
-   main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
-   main.humidity Humidity, %
-   main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
-   main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
-   main.sea_level Atmospheric pressure on the sea level, hPa
-   main.grnd_level Atmospheric pressure on the ground level, hPa

### wind

-   wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
-   wind.deg Wind direction, degrees (meteorological)

### clouds

-   clouds.all Cloudiness, %

### rain

-   rain.3h Rain volume for the last 3 hours

### snow

-   snow.3h Snow volume for the last 3 hours

### dt : Time of data calculation, unix, UTC

### sys

-   sys.type Internal parameter
-   sys.id Internal parameter
-   sys.message Internal parameter
-   sys.country Country code (GB, JP etc.)
-   sys.sunrise Sunrise time, unix, UTC
-   sys.sunset Sunset time, unix, UTC

### cod Internal parameter
