var siege=require('siege');
siege()
  .on(8880)
  .for(10000).times
  .get('/api/rooms')
  .attack()