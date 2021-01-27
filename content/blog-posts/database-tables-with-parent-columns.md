---
date: 2021-01-27T19:57:08Z
layout: post
draft: false
updatedAt: 2021-01-27T19:57:08Z
hero_image: "/images/jan-antonin-kolar-lrox0shwjuq-unsplash.jpg"
title: Database Tables With Parent Columns
categories:
- Database
tags:
- Oracle

---
# The Trouble With Parent Columns

> Today I ran into an issue where a user set a parent record to be itself in a poorly written form. No validation allowed a record to be the parent of itself.

## Disclaimer

For security and liability reasons, I will be using generic data but the concepts still apply.

## The Problem Query

> The following would cause the record with a parent of themselves to not show up at all. This also lead to the parent record's children records not showing up either.

```sql
select
  employee_id,
  -- This column is used to provide indentation in an HTML select
  lpad (
    employee_name,
    length (
    employee_name
    ) + (level - 1) * 2,
    ' '
  ) as display,
  employee_name,
  supervisor_id
from
  employees
start with
  coalesce(supervisor_id, -1) = -1
connect by prior
  employee_id = supervisor_id
order siblings by
  lower (employee_name) asc
```

## The Data

> Let's call this table `employees`

### Bad

> This table should never have the same value in the `employee_id` and `supervisor_id` columns.

| employee_id | employee_name | supervisor_id |
| --- | --- | --- |
| 0 | Jane Doe | 0 |
| 1 | James Waddles | 0 |
| 2 | Marva Everna | 0 |

### Good

> A proper table check constraint and form validation will prevent this from happening.

| employee_id | employee_name | supervisor_id |
| --- | --- | --- |
| 0 | Jane Doe |  |
| 1 | James Waddles | 0 |
| 2 | Marva Everna | 0 |

## Solution

### 1. Add a Table Check Constraint

```sql
ALTER TABLE employees
ADD CONSTRAINT employee_is_not_own_supervisor CHECK (employee_id <> supervisor_id) ENABLE;
```

### 2. Add Form Validation

This one is open to whatever system you are using. For my project I was using **Vuelidate**. Add a check in your code to verify that the fields tied to `employee_id` and `supervisor_id` are not the same value.

### 3. Test to Verify

Test with the tools you normally use.

## Final Thoughts

Hopefully this helps save you some time and frustration in the future. Thanks for reading!

## Shameless Self Promotion

I sell original music compositions, mainly for brass instruments over at [Wayne Boka Music](https://gumroad.com/wayneboka "Wayne Boka Music on Gumroad"). Help support this blog by buying some music for yourself or the favorite musician in your life.

## Photo Credit

Photo by [Jan Antonin Kolar](https://unsplash.com/@jankolar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/databases?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)