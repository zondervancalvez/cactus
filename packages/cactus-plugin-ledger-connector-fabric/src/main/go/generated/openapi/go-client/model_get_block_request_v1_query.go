/*
Hyperledger Cactus Plugin - Connector Fabric

Can perform basic tasks on a fabric ledger

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-fabric

import (
	"encoding/json"
)

// checks if the GetBlockRequestV1Query type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetBlockRequestV1Query{}

// GetBlockRequestV1Query Query selector, caller must provide at least one of them. First found will be used, rest will be ignored, so it's recommended to pass single selector.
type GetBlockRequestV1Query struct {
	// Select block by it's number.
	BlockNumber *string `json:"blockNumber,omitempty"`
	BlockHash *GetBlockRequestV1QueryBlockHash `json:"blockHash,omitempty"`
	// Select block by id of transaction that it contains.
	TransactionId *string `json:"transactionId,omitempty"`
}

// NewGetBlockRequestV1Query instantiates a new GetBlockRequestV1Query object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetBlockRequestV1Query() *GetBlockRequestV1Query {
	this := GetBlockRequestV1Query{}
	return &this
}

// NewGetBlockRequestV1QueryWithDefaults instantiates a new GetBlockRequestV1Query object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetBlockRequestV1QueryWithDefaults() *GetBlockRequestV1Query {
	this := GetBlockRequestV1Query{}
	return &this
}

// GetBlockNumber returns the BlockNumber field value if set, zero value otherwise.
func (o *GetBlockRequestV1Query) GetBlockNumber() string {
	if o == nil || IsNil(o.BlockNumber) {
		var ret string
		return ret
	}
	return *o.BlockNumber
}

// GetBlockNumberOk returns a tuple with the BlockNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetBlockRequestV1Query) GetBlockNumberOk() (*string, bool) {
	if o == nil || IsNil(o.BlockNumber) {
		return nil, false
	}
	return o.BlockNumber, true
}

// HasBlockNumber returns a boolean if a field has been set.
func (o *GetBlockRequestV1Query) HasBlockNumber() bool {
	if o != nil && !IsNil(o.BlockNumber) {
		return true
	}

	return false
}

// SetBlockNumber gets a reference to the given string and assigns it to the BlockNumber field.
func (o *GetBlockRequestV1Query) SetBlockNumber(v string) {
	o.BlockNumber = &v
}

// GetBlockHash returns the BlockHash field value if set, zero value otherwise.
func (o *GetBlockRequestV1Query) GetBlockHash() GetBlockRequestV1QueryBlockHash {
	if o == nil || IsNil(o.BlockHash) {
		var ret GetBlockRequestV1QueryBlockHash
		return ret
	}
	return *o.BlockHash
}

// GetBlockHashOk returns a tuple with the BlockHash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetBlockRequestV1Query) GetBlockHashOk() (*GetBlockRequestV1QueryBlockHash, bool) {
	if o == nil || IsNil(o.BlockHash) {
		return nil, false
	}
	return o.BlockHash, true
}

// HasBlockHash returns a boolean if a field has been set.
func (o *GetBlockRequestV1Query) HasBlockHash() bool {
	if o != nil && !IsNil(o.BlockHash) {
		return true
	}

	return false
}

// SetBlockHash gets a reference to the given GetBlockRequestV1QueryBlockHash and assigns it to the BlockHash field.
func (o *GetBlockRequestV1Query) SetBlockHash(v GetBlockRequestV1QueryBlockHash) {
	o.BlockHash = &v
}

// GetTransactionId returns the TransactionId field value if set, zero value otherwise.
func (o *GetBlockRequestV1Query) GetTransactionId() string {
	if o == nil || IsNil(o.TransactionId) {
		var ret string
		return ret
	}
	return *o.TransactionId
}

// GetTransactionIdOk returns a tuple with the TransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetBlockRequestV1Query) GetTransactionIdOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionId) {
		return nil, false
	}
	return o.TransactionId, true
}

// HasTransactionId returns a boolean if a field has been set.
func (o *GetBlockRequestV1Query) HasTransactionId() bool {
	if o != nil && !IsNil(o.TransactionId) {
		return true
	}

	return false
}

// SetTransactionId gets a reference to the given string and assigns it to the TransactionId field.
func (o *GetBlockRequestV1Query) SetTransactionId(v string) {
	o.TransactionId = &v
}

func (o GetBlockRequestV1Query) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetBlockRequestV1Query) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockNumber) {
		toSerialize["blockNumber"] = o.BlockNumber
	}
	if !IsNil(o.BlockHash) {
		toSerialize["blockHash"] = o.BlockHash
	}
	if !IsNil(o.TransactionId) {
		toSerialize["transactionId"] = o.TransactionId
	}
	return toSerialize, nil
}

type NullableGetBlockRequestV1Query struct {
	value *GetBlockRequestV1Query
	isSet bool
}

func (v NullableGetBlockRequestV1Query) Get() *GetBlockRequestV1Query {
	return v.value
}

func (v *NullableGetBlockRequestV1Query) Set(val *GetBlockRequestV1Query) {
	v.value = val
	v.isSet = true
}

func (v NullableGetBlockRequestV1Query) IsSet() bool {
	return v.isSet
}

func (v *NullableGetBlockRequestV1Query) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetBlockRequestV1Query(val *GetBlockRequestV1Query) *NullableGetBlockRequestV1Query {
	return &NullableGetBlockRequestV1Query{value: val, isSet: true}
}

func (v NullableGetBlockRequestV1Query) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetBlockRequestV1Query) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


