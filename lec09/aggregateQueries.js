//Find all zip codes in IOWA state.
db.zips.aggregate([
    {$match:{state: "IA"}},
    {$group: {_id:"$_id"}}
]);
//Find all zip codes with population more than 1000.
db.zips.aggregate([
    {$match:{pop: {$gt:1000}}},
    {$group:{_id:"$_id"}}
]);

//Find all cities with more than one zip codes and sort result based on city and state.
db.zips.aggregate([
    {$group:{_id:{"city":"$city","state":"$state"},zipcount:{$sum:1}}},
    {$match: {zipcount:{$gte:2}}},
    {$sort:{"_id.state":1,"_id.city":1}}
]);

//Display least populated city in each state.
db.zips.aggregate([
    {$sort:{"pop":-1}},
    {$group:{_id:{"city":"$city","state":"$state","pop":"$pop"},statecount: {$sum:1}}},
    {$match:{statecount:1}},
    {$project:{
        _id:0,
        'state':"$_id.state",
        'city':"$_id.city",
        'pop':"$_id.pop"
      }},
      {$group:{_id: "$state",city: {"$first":"$city"}}}
])
