// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scheduler

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Scheduler Job.
// 
// > **NOTE:** Support for Scheduler Job has been deprecated by Microsoft in favour of Logic Apps ([more information can be found at this link](https://docs.microsoft.com/en-us/azure/scheduler/migrate-from-scheduler-to-logic-apps)) - as such we plan to remove support for this resource as a part of version 2.0 of the AzureRM Provider.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/scheduler_job.html.markdown.
type Job struct {
	s *pulumi.ResourceState
}

// NewJob registers a new resource with the given unique name, arguments, and options.
func NewJob(ctx *pulumi.Context,
	name string, args *JobArgs, opts ...pulumi.ResourceOpt) (*Job, error) {
	if args == nil || args.JobCollectionName == nil {
		return nil, errors.New("missing required argument 'JobCollectionName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["actionStorageQueue"] = nil
		inputs["actionWeb"] = nil
		inputs["errorActionStorageQueue"] = nil
		inputs["errorActionWeb"] = nil
		inputs["jobCollectionName"] = nil
		inputs["name"] = nil
		inputs["recurrence"] = nil
		inputs["resourceGroupName"] = nil
		inputs["retry"] = nil
		inputs["startTime"] = nil
		inputs["state"] = nil
	} else {
		inputs["actionStorageQueue"] = args.ActionStorageQueue
		inputs["actionWeb"] = args.ActionWeb
		inputs["errorActionStorageQueue"] = args.ErrorActionStorageQueue
		inputs["errorActionWeb"] = args.ErrorActionWeb
		inputs["jobCollectionName"] = args.JobCollectionName
		inputs["name"] = args.Name
		inputs["recurrence"] = args.Recurrence
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["retry"] = args.Retry
		inputs["startTime"] = args.StartTime
		inputs["state"] = args.State
	}
	s, err := ctx.RegisterResource("azure:scheduler/job:Job", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Job{s: s}, nil
}

// GetJob gets an existing Job resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJob(ctx *pulumi.Context,
	name string, id pulumi.ID, state *JobState, opts ...pulumi.ResourceOpt) (*Job, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["actionStorageQueue"] = state.ActionStorageQueue
		inputs["actionWeb"] = state.ActionWeb
		inputs["errorActionStorageQueue"] = state.ErrorActionStorageQueue
		inputs["errorActionWeb"] = state.ErrorActionWeb
		inputs["jobCollectionName"] = state.JobCollectionName
		inputs["name"] = state.Name
		inputs["recurrence"] = state.Recurrence
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["retry"] = state.Retry
		inputs["startTime"] = state.StartTime
		inputs["state"] = state.State
	}
	s, err := ctx.ReadResource("azure:scheduler/job:Job", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Job{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Job) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Job) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
func (r *Job) ActionStorageQueue() *pulumi.Output {
	return r.s.State["actionStorageQueue"]
}

// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
func (r *Job) ActionWeb() *pulumi.Output {
	return r.s.State["actionWeb"]
}

// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
func (r *Job) ErrorActionStorageQueue() *pulumi.Output {
	return r.s.State["errorActionStorageQueue"]
}

// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
func (r *Job) ErrorActionWeb() *pulumi.Output {
	return r.s.State["errorActionWeb"]
}

// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
func (r *Job) JobCollectionName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["jobCollectionName"])
}

// The name of the Scheduler Job. Changing this forces a new resource to be created.
func (r *Job) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A `recurrence` block defining a job occurrence schedule.
func (r *Job) Recurrence() *pulumi.Output {
	return r.s.State["recurrence"]
}

// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
func (r *Job) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A `retry` block defining how to retry as described below.
func (r *Job) Retry() *pulumi.Output {
	return r.s.State["retry"]
}

// The time the first instance of the job is to start running at.
func (r *Job) StartTime() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["startTime"])
}

// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
func (r *Job) State() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["state"])
}

// Input properties used for looking up and filtering Job resources.
type JobState struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue interface{}
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb interface{}
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue interface{}
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb interface{}
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName interface{}
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name interface{}
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence interface{}
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `retry` block defining how to retry as described below.
	Retry interface{}
	// The time the first instance of the job is to start running at.
	StartTime interface{}
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State interface{}
}

// The set of arguments for constructing a Job resource.
type JobArgs struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue interface{}
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb interface{}
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue interface{}
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb interface{}
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName interface{}
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name interface{}
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence interface{}
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `retry` block defining how to retry as described below.
	Retry interface{}
	// The time the first instance of the job is to start running at.
	StartTime interface{}
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State interface{}
}
