
<a  name="TrackerGG"></a>

 # Example
```javascript
const  TrackerGG = require("@notiixd/trackergg")
const  tapi = new  TrackerGG({api_key: "Your Tracker.GG API Key"});

(async () => {
const  data = await  tapi.csgo("notii123");
console.log(data);
})(0);
```

## TrackerGG

**Kind**: global class

  

*  [TrackerGG](#TrackerGG)

*  [.csgo](#TrackerGG+csgo) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.apex](#TrackerGG+apex) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.division](#TrackerGG+division) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.overwatch](#TrackerGG+overwatch) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.splitgate](#TrackerGG+splitgate) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.hyperscape](#TrackerGG+hyperscape) ⇒ <code>Promise.&lt;Object&gt;</code>

  

<a  name="TrackerGG+csgo"></a>

  

### trackerGG.csgo ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+apex"></a>

  

### trackerGG.apex ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+division"></a>

  

### trackerGG.division ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+overwatch"></a>

  

### trackerGG.overwatch ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+splitgate"></a>

  

### trackerGG.splitgate ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+hyperscape"></a>

  

### trackerGG.hyperscape ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |