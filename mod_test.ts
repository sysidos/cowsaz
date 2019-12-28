import * as cowsay from './mod.ts'
import { test, assert } from './test_deps.ts'

test(async function test_cowsay_1() {
    let res = await cowsay.say({
        text: 'Deno Is Great'
    })
    assert(res.indexOf('Deno Is Great')>0)
})

test(async function test_cowsay_random() {
    let res = await cowsay.say({
        text: 'Deno Is Great',
        random: true
    })
    assert(res.indexOf('Deno Is Great')>0)
})

test(async function test_cowsay_eyes() {
    let res = await cowsay.say({
        text: 'Deno Is Great',
        eyes: '@@'
    })
    assert(res.indexOf('@@')>0)
})

test(async function test_cowsay_tongue() {
    let res = await cowsay.say({
        text: 'Deno Is Great',
        tongue: '%'
    })
    assert(res.indexOf('%')>0)
})

test(async function test_cowsay_mode_d() {
    let res = await cowsay.say({
        text: 'Deno Is Great',
        mode: 'd'
    })
    assert(res.indexOf('xx')>0)
    assert(res.indexOf('U')>0)
})



