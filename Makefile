zip:
	mkdir /tmp/temp
	cp -r . /tmp/temp
	rm -rf /tmp/temp/.git
	zip -r slithery.zip /tmp/temp
	rm -rf /tmp/temp