function* g()
{
    yield 1;
    yield 2;
    yield 3;
}

for (const x of g())
{
    console.log(x);
}