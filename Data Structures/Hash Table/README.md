# Hash Tables

| operation | BigO |
| --------- | ---- |
| Search    | O(1) |
| Insert    | O(1) |
| Space     | O(n) |
| Delete    | O(1) |

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

## Hashing

Hashing is a technique to convert a range of key values into a range of indexes of an array.

## Hash Function

Hash function generates a value of fixed length for each input it gets. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

## Hash Collisions

[Visual Example](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)

Since a hash function gets us a small number for a big key, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision and must be handled using some collision handling technique
