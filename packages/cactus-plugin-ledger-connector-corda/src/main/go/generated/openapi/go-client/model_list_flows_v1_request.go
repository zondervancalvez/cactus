/*
Hyperledger Cacti Plugin - Connector Corda

Can perform basic tasks on a Corda ledger

API version: 2.0.0-rc.3
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-corda

import (
	"encoding/json"
)

// checks if the ListFlowsV1Request type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ListFlowsV1Request{}

// ListFlowsV1Request struct for ListFlowsV1Request
type ListFlowsV1Request struct {
	Filter *string `json:"filter,omitempty"`
}

// NewListFlowsV1Request instantiates a new ListFlowsV1Request object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListFlowsV1Request() *ListFlowsV1Request {
	this := ListFlowsV1Request{}
	return &this
}

// NewListFlowsV1RequestWithDefaults instantiates a new ListFlowsV1Request object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListFlowsV1RequestWithDefaults() *ListFlowsV1Request {
	this := ListFlowsV1Request{}
	return &this
}

// GetFilter returns the Filter field value if set, zero value otherwise.
func (o *ListFlowsV1Request) GetFilter() string {
	if o == nil || IsNil(o.Filter) {
		var ret string
		return ret
	}
	return *o.Filter
}

// GetFilterOk returns a tuple with the Filter field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListFlowsV1Request) GetFilterOk() (*string, bool) {
	if o == nil || IsNil(o.Filter) {
		return nil, false
	}
	return o.Filter, true
}

// HasFilter returns a boolean if a field has been set.
func (o *ListFlowsV1Request) HasFilter() bool {
	if o != nil && !IsNil(o.Filter) {
		return true
	}

	return false
}

// SetFilter gets a reference to the given string and assigns it to the Filter field.
func (o *ListFlowsV1Request) SetFilter(v string) {
	o.Filter = &v
}

func (o ListFlowsV1Request) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ListFlowsV1Request) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Filter) {
		toSerialize["filter"] = o.Filter
	}
	return toSerialize, nil
}

type NullableListFlowsV1Request struct {
	value *ListFlowsV1Request
	isSet bool
}

func (v NullableListFlowsV1Request) Get() *ListFlowsV1Request {
	return v.value
}

func (v *NullableListFlowsV1Request) Set(val *ListFlowsV1Request) {
	v.value = val
	v.isSet = true
}

func (v NullableListFlowsV1Request) IsSet() bool {
	return v.isSet
}

func (v *NullableListFlowsV1Request) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListFlowsV1Request(val *ListFlowsV1Request) *NullableListFlowsV1Request {
	return &NullableListFlowsV1Request{value: val, isSet: true}
}

func (v NullableListFlowsV1Request) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListFlowsV1Request) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

