const Delegate = require('../models/delegate')
const express = require('express')
const NotifyService = require('../modules/notifyService')
const mongoose = require('mongoose')

const createDelegate = async (req, res) => {
  //   console.log(req.body)
  try {
    const delegate = new Delegate(req.body)
    await delegate.save().then(() => {
      res.status(201).json({
        message: 'Delegate created successfully'
      })
      NotifyService.email_delegate(delegate)
    })
  } catch (error) {
    res.status(409).json({ message: 'user exists' })
  }
}

const findAllDelegates = async (req, res) => {
  const delegate = await Delegate.find()
    .select(
      'firstName lastName email phone city country organisationalChallenges alterStrategies strategiesImplemented createdAt updatedAt'
    )
    .exec()
    .then(results => {
      const result = results.map(result => {
        return {
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          phone: result.phone,
          city: result.city,
          country: result.country,
          organisationalChallenges: result.organisationalChallenges,
          alterStrategies: result.alterStrategies,
          strategiesImplemented: result.strategiesImplemented,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      })
      const response = {
        count: results.length,
        result: result
      }
      res.status(200).json(response)
    })
    .catch(err => console.log(err))
}

module.exports = { createDelegate, findAllDelegates }
